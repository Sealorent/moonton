import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function TextInput(
    { 
        type = 'text', 
        className = '', 
        value = null,
        isFocused = false, 
        variant = 'primary',
        placeholder = '',
        ...props 
    }, 
    ref
) {

    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <input
            {...props}
            type={type}
            className={
                `rounded-2xl bg-form-bg focus:border-0 focus:ring-transparent focus:ring-0 py-4 px-7 w-full input-${variant}  ${className}`
            }
            ref={input}
            placeholder={placeholder}
        />
    );
});
