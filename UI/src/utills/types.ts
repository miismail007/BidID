export type SideNavType = {
    menu: string,
    setMenu: any
}

export type ApiDataType = {
    name: string, 
    userCount: number,
    id: string
}

export type MapType = { 
    countryData: Array<ApiDataType>, 
    totalCount: number 
}

export type FormType = { 
    countryData: Array<ApiDataType>, 
    setCountryData: any
}