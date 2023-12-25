const TextInput = ({ label, labelClassName, containerClassName, inputClassName, inputContainerClassName, required, disabled, placeHolder, onChange }) => {
  return (
    <div className={`${containerClassName}`}>
      <label className={` text-gray-200 text-sm ${labelClassName}`}>{label}</label>
      <div className={`${inputContainerClassName}`}>
        <input
          type='email'
          className={`px-5 h-full w-full outline-none border-none h-[44px] bg-[#393f5c] text-[#FFF] rounded-[2px] ${inputClassName} `}
          placeholder={placeHolder}
          required={required}
          disabled={disabled}
        />
      </div>
    </div>
  )
}

export default TextInput
