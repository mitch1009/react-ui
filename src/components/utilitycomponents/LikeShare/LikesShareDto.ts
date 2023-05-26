export declare interface LikeShareDto {
    type: LikeShareTypes
    action: ()=> any
    Icon?: any
    num?: number
    
}

export declare type LikeShareTypes ="likes"|"share"|'donate'

export declare interface LikeShareProps {
    main: LikeShareDto[]
    donate: LikeShareDto
    [key:string]: any
}