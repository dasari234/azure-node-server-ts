export interface JiraProject {    
    expand:string;
    self:string;
    id:number;
    key:string;    
    name:string;
    projectTypeKey:string;
    simplified:boolean;
    style:string;
    isPrivate:boolean;
    avatarUrls:{
        "48x48": string;
        "24x24": string;
        "16x16": string;
        "32x32": string;
    }
}