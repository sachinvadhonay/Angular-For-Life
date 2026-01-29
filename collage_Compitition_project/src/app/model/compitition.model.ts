export class CompetitionModel{
    
  competitionId: number;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  status: string;
 
constructor(){
  this.competitionId= 0;
  this.title= '';
  this.description= '';
  this.startDate= '';
  this.endDate= '';
  this.status= "new";
}



}
export class Project {
  submissionId: number;
  competitionId: number;
  userId: number;
  projectTitle: string;
  description: string;
  githubLink: string;
  submissionDate: string;
  status: string;
  rank: number;

  constructor() {
    this.submissionId = 0;
    this.competitionId = 0;
    this.userId = 0;
    this.projectTitle = '';
    this.description = '';
    this.githubLink = '';
    this.submissionDate = '';
    this.status = '';
    this.rank = 0;
  }
}
