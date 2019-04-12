import { JiraProject } from './../model/jira';
import {map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class JiraService {

  constructor(private http:HttpClient) {

   }

   jiraData = [{"expand":"description,lead,issueTypes,url,projectKeys","self":"https://ulatlprod01.atlassian.net/rest/api/3/project/20049","id":"20049","key":"VSTSIN","name":"VSTSIntegration ","avatarUrls":{"48x48":"https://ulatlprod01.atlassian.net/secure/projectavatar?avatarId=10324","24x24":"https://ulatlprod01.atlassian.net/secure/projectavatar?size=small&avatarId=10324","16x16":"https://ulatlprod01.atlassian.net/secure/projectavatar?size=xsmall&avatarId=10324","32x32":"https://ulatlprod01.atlassian.net/secure/projectavatar?size=medium&avatarId=10324"},"projectTypeKey":"software","simplified":true,"style":"next-gen","isPrivate":false},{"expand":"description,lead,issueTypes,url,projectKeys","self":"https://ulatlprod01.atlassian.net/rest/api/3/project/20052","id":"20052","key":"CP2","name":"CI/CD Phase 2","avatarUrls":{"48x48":"https://ulatlprod01.atlassian.net/secure/projectavatar?avatarId=10324","24x24":"https://ulatlprod01.atlassian.net/secure/projectavatar?size=small&avatarId=10324","16x16":"https://ulatlprod01.atlassian.net/secure/projectavatar?size=xsmall&avatarId=10324","32x32":"https://ulatlprod01.atlassian.net/secure/projectavatar?size=medium&avatarId=10324"},"projectTypeKey":"software","simplified":false,"style":"classic","isPrivate":false},{"expand":"description,lead,issueTypes,url,projectKeys","self":"https://ulatlprod01.atlassian.net/rest/api/3/project/19943","id":"19943","key":"UDIC2","name":"UDL_Data_Ingestion_CI-2022318","avatarUrls":{"48x48":"https://ulatlprod01.atlassian.net/secure/projectavatar?avatarId=10324","24x24":"https://ulatlprod01.atlassian.net/secure/projectavatar?size=small&avatarId=10324","16x16":"https://ulatlprod01.atlassian.net/secure/projectavatar?size=xsmall&avatarId=10324","32x32":"https://ulatlprod01.atlassian.net/secure/projectavatar?size=medium&avatarId=10324"},"projectTypeKey":"software","simplified":false,"style":"classic","isPrivate":false},{"expand":"description,lead,issueTypes,url,projectKeys","self":"https://ulatlprod01.atlassian.net/rest/api/3/project/20137","id":"20137","key":"SBF","name":"SC BDL Factory","avatarUrls":{"48x48":"https://ulatlprod01.atlassian.net/secure/projectavatar?avatarId=10324","24x24":"https://ulatlprod01.atlassian.net/secure/projectavatar?size=small&avatarId=10324","16x16":"https://ulatlprod01.atlassian.net/secure/projectavatar?size=xsmall&avatarId=10324","32x32":"https://ulatlprod01.atlassian.net/secure/projectavatar?size=medium&avatarId=10324"},"projectTypeKey":"software","simplified":false,"style":"classic","isPrivate":false},{"expand":"description,lead,issueTypes,url,projectKeys","self":"https://ulatlprod01.atlassian.net/rest/api/3/project/19982","id":"19982","key":"CICD","name":"CI/CD","avatarUrls":{"48x48":"https://ulatlprod01.atlassian.net/secure/projectavatar?avatarId=10324","24x24":"https://ulatlprod01.atlassian.net/secure/projectavatar?size=small&avatarId=10324","16x16":"https://ulatlprod01.atlassian.net/secure/projectavatar?size=xsmall&avatarId=10324","32x32":"https://ulatlprod01.atlassian.net/secure/projectavatar?size=medium&avatarId=10324"},"projectTypeKey":"software","simplified":false,"style":"classic","isPrivate":false}];

  getAllJiraProjects()  {
    return this.jiraData;
  }

  getGeoCode(){
    const address = 'bangalore';
    const _url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiZGFzYXJpOSIsImEiOiJjanUwenVubDkwNDVzNDRsdXJvcGM3ZzAxIn0.X-A-FTAlEHCXbMgmsJ2eQQ&limit=1'
    return this.http.get(_url);
  }

  getLocalApi(){
    return this.http.get('/api/users');
  }

}
