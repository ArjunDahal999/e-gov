import { create } from 'zustand'
import z from 'zod'
import { createJSONStorage, devtools, persist } from 'zustand/middleware';

const UserDataSchema = z.object({
    _id: z.string(),
    username: z.string(),
    email: z.string(),
    role: z.string(),
    createdAt: z.string(),
    emailActivated: z.string(),
});

type IUserData = z.infer<typeof UserDataSchema>;

interface UserAuthState
{
    accessToken: string | undefined
    userData: IUserData | any
    actions: {
        setAccessToken: (accessToken: string | undefined) => void;
        setUserData: (data: any) => void;
        logout: () => void;
    }
}

export const useAuthStore = create<UserAuthState>()(
    devtools(
        persist(
            (set, get) => ({
                accessToken: undefined,
                userData: undefined,
                actions: {
                    setAccessToken: (accessToken: string | undefined) =>
                    {
                        set({
                            accessToken,
                        });
                    },
                    logout: () =>
                        set({
                            accessToken: undefined,
                            userData: undefined,
                        }),
                    setUserData: (data) =>
                    {
                        set({
                            userData: data
                        })
                    }
                }
            }),
            {
                name: 'user-storage', // name of the item in the storage (must be unique)
                storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
            },
        )
    ));