import React from 'react';
import { Button } from '../ui/button';

interface CheckboxOptionProps
{
    id: string;
    label: string;
}

const CheckboxOption: React.FC<CheckboxOptionProps> = ({ id, label }) =>
{
    return (
        <div className="flex items-center space-x-2">
            <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 form-tick"
                id={id}
                type="checkbox"
            />
            <label
                className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm font-medium leading-none"
                htmlFor={id}
            >
                {label}
            </label>
        </div>
    );
};

interface TextAreaProps
{
    id: string;
    label: string;
    placeholder: string;
}

const TextArea: React.FC<TextAreaProps> = ({ id, label, placeholder }) =>
{
    return (
        <div className="space-y-2">
            <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor={id}
            >
                {label}
            </label>
            <textarea
                className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[100px]"
                id={id}
                placeholder={placeholder}
            ></textarea>
        </div>
    );
};

interface FileInputProps
{
    id: string;
    label: string;
    accept: string;
}

const FileInput: React.FC<FileInputProps> = ({ id, label, accept }) =>
{
    return (
        <div className="space-y-2">
            <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor={id}
            >
                {label}
            </label>
            <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id={id}
                accept={accept}
                type="file"
            />
        </div>
    );
};

interface InputFieldProps
{
    id: string;
    label: string;
    placeholder?: string;
    type?: string;
    required?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
    id,
    label,
    placeholder,
    type = 'text',
    required = false,
}) =>
{
    return (
        <div className="space-y-2">
            <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor={id}
            >
                {label}
            </label>
            <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id={id}
                placeholder={placeholder}
                required={required}
                type={type}
            />
        </div>
    );
};

const LicenseTypeSelection: React.FC = () =>
{
    return (
        <fieldset className="space-y-2">
            <legend className="text-sm font-medium">Select the type of vehicle license</legend>
            <div className="grid grid-cols-3 gap-2">
                <CheckboxOption id="motorcycle" label="Motorcycle" />
                <CheckboxOption id="car" label="Car" />
                <CheckboxOption id="truck" label="T" />
            </div>
        </fieldset>
    );
};

const DrivingLicenseForm: React.FC = () =>
{
    return (
        <main className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-6xl" data-v0-t="card">
                <div className="flex flex-col space-y-1.5 p-6">
                    <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
                        Driving License Registration
                    </h3>
                    <p className="text-sm text-muted-foreground">Please fill in the form to register for a driving license.</p>
                </div>
                <div className="p-6 space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <InputField id="first-name" label="First name" placeholder="First name" required />
                        <InputField id="last-name" label="Last name" placeholder="Last name" required />
                    </div>
                    <InputField id="address" label="Address" placeholder="Address" required />
                    <div className="grid grid-cols-2 gap-4">
                        <InputField id="dob" label="Date of Birth" type="date" required />
                        <InputField id="contact" label="Contact Number" placeholder="Contact Number" type="tel" required />
                    </div>
                    <InputField id="citizenship" label="Citizenship Number" placeholder="Citizenship Number" required />
                    <InputField id="passport" label="Passport Number" placeholder="Passport Number" />
                    <FileInput id="photo" label="Upload recent photograph" accept="image/*" />
                    <LicenseTypeSelection />
                    <TextArea id="additional" label="Additional Information or Comments" placeholder="Additional Information or Comments" />
                </div>
                <div className="flex items-center p-6">
                    <Button variant={"outline"} >Submit</Button>
                </div>
            </div>
        </main>
    );
};

export default DrivingLicenseForm;