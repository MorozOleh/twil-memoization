import { FormControl } from "@/components/Form/FormControl";
import { FormInput } from "@/components/Form/FormInput";
import { FormLabel } from "@/components/Form/FormLabel";
import { useSetState } from "@/hooks/useSetState";
import { ChangeEvent, useCallback, useState } from "react";

const initialValues = {
    name: "",
    email: "",
};

export const FormsPage = () => {
    const [form, setFrom] = useSetState(initialValues);
    const [touched, setTouched] = useSetState<Partial<Record<keyof typeof initialValues, boolean>>>({})

    const handleChange = useCallback(({
        target: { value, name },
    }: ChangeEvent<HTMLInputElement>) => {
        setFrom({ [name]: value });
    }, [])

    const handleTouched = ({ target: { name } }: React.FocusEvent<HTMLInputElement>) => {
        setTouched({ [name]: true })
    }

    return (
        <div className="w-full p-5 bg-slate-700 rounded-lg">
            <form className="flex flex-col gap-3">
                <FormControl isRequired id='name-field' className="flex flex-col">
                    <FormLabel label="Name" className="w-full" />
                    <FormInput
                        value={form.name}
                        name="name"
                        onChange={handleChange}
                        onBlur={handleTouched}
                        className="rounded-md indent-2 text-black outline-none"
                    />
                </FormControl>
                <FormControl isRequired id='email-field' className="flex flex-col">
                    <FormLabel label="Email" className="w-full" />
                    <FormInput
                        value={form.email}
                        name="email"
                        onBlur={handleTouched}
                        onChange={handleChange}
                        className="rounded-md indent-2 text-black outline-none"
                    />
                </FormControl>
            </form>
        </div>
    );
};
