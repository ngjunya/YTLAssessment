
export default class Transaction {
  constructor(public uuid: number, public amount: string, public date: string, public description: string, public status: string, public merchantID: String) { }
}
