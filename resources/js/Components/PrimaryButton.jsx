export default function PrimaryButton(
    { 
        className = '', 
        disabled, 
        children, 
        variant = 'primary',
        ...props 
    }
) {
    return (
        <button
            {...props}
            className={
                `rounded-2xl py-[13px] text-center w-full btn-${variant} ${
                    disabled && 'opacity-25'
                } ` + className 

            }

            disabled={disabled}
        >
            {children}
        </button>
    );
}
