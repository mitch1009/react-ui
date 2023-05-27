export declare interface AuthProps{
    type: string
    data: AuthDtoDataProps
}

export declare interface AuthDtoDataProps {
    title: string
    formFields: FormFieldsDto[]
}

export declare interface FormFieldsDto {
    name?: string
    id?: string
    type?: string
    placeholder?: string
    [key: string]:any
}