export class Firm {
  firmName: string;
  firmNumber: string;
  startDate : Date;

  constructor(firmName : string, firmNumber : string) {
    this.firmName = firmName;
    this.firmNumber = firmNumber;
    this.startDate = new Date();
  }
}