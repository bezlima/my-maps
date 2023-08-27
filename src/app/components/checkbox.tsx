import React, { ForwardedRef } from 'react'

interface CheckboxProps {
    label: string
    name: string
    change?: () => void
    defaultChecked?: boolean
    addClass?: string
    check: boolean
    errors?: any
    labelClass?: string
}

const Checkbox = React.forwardRef(
    (
        { check, label, name, change, defaultChecked, addClass, errors, labelClass, ...rest }: CheckboxProps,
        forwardedRef: ForwardedRef<HTMLInputElement>
    ) => {
        return (
            <label htmlFor={name} className={`cursor-pointer flex flex-col gap-1 w-fit select-none ${addClass}`}>
                <div className="flex items-center">
                    <input
                        className="hidden"
                        ref={forwardedRef}
                        type="checkbox"
                        name={name}
                        checked={check}
                        onChange={change}
                        id={name}
                        defaultChecked={defaultChecked}
                        {...rest}
                    />
                    <div
                        className={`
              w-6
              h-6
              ${check ? 'bg-teal-800' : 'bg-teal-800'}
              ${errors ? 'border-red-300 border focus:border-red-300' : ''} 
              rounded
              flex
              item-center
              justify-center
              text-gray-50
              select-none
          `}
                    >
                        {check ? '✔️' : ''}
                    </div>
                    <label
                        htmlFor={name}
                        className={`
                        text-neutral-950 text-sm
                        ${label ? 'ml-3' : 'ml-0'}
                        cursor-pointer
                        ${labelClass}
                        `}
                    >
                        {label}
                    </label>
                </div>
                {errors && <span className="text-red-300 text-sm">{errors}</span>}
            </label>
        )
    }
)

Checkbox.displayName = 'Checkbox'

export default Checkbox
