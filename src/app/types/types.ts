export interface Job {
  id:number
  job:string,
  company:string,
  field:string
  logo:string
  description:string

  }


export interface JobForm {
  job:string,
    company:string,
    field:string
    logo:string
    description:string
}

export interface Profile {
  id:number
  name:string
  age:string,
  degree:string
  email:string
  resume:string

  }

export interface ProfileForm {
  name:string
  age:string,
  degree:string
  email:string
  resume:string
}