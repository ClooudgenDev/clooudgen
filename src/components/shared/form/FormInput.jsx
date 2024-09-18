import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export const FormInput = ({ label, name, placeholder, className, error, defaultValue = '', ...rest }) => {

  return (
    <>
      {label ? <div className="flex flex-col w-full space-y-2">
        <label
          className="flex items-center gap-1 mx-1 font-semibold"
          htmlFor={name}
        >
          {label} <span className="text-red-500">*</span>
        </label>
        <Input
          name={name}
          className={cn("bg-[#f7f7f7]", className)}
          placeholder={`${placeholder}`}
          autoComplete="off"
          defaultValue={defaultValue}
          {...rest}
        />
      </div> :
        <>
          <Input
            name={name}
            className={cn("bg-[#f7f7f7]", className)}
            placeholder={`${placeholder}`}
            autoComplete="off"
            defaultValue={defaultValue}
            {...rest}
          />
          <span className="text-sm text-red-500">{error}</span>
        </>
      }
    </>
  );
};
