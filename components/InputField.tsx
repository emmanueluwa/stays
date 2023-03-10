import { FormControl, FormErrorMessage, FormLabel, Input, Textarea } from "@chakra-ui/react";
import { useField } from "formik"
import { InputHTMLAttributes } from "react";

//input field takes any props regualr input field would take
type InputFieldProps = InputHTMLAttributes<HTMLInputElement>  & {
  label: string;
  name: string;
  textarea?: boolean;
}

export const InputField: React.FC<InputFieldProps> = ({ 
  label, 
  textarea,
  size: _, 
  ...props 
}) => {

  let InputOrTextarea = Input as any;
  if (textarea) {
    InputOrTextarea = Textarea;
  }  
  const [field, {error}] = useField(props)
  return (
    <FormControl isInvalid={!!error}>
      <FormLabel htmlFor={field.name}>{label}</FormLabel>
        <InputOrTextarea {...field} {...props} id={field.name} />
        {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
    </FormControl>
  )
}