import { Pipe, PipeTransform } from "@angular/core";
import { User } from "../models/user.model";

@Pipe({
  name: 'filteredUsers'
})

export class FilterPipe implements PipeTransform {
  transform(users:User[], filterText:string) {
    if(users.length === 0 || filterText === ''){
      return users;
    }else {
      return users.filter((user) => {
        return user.gender?.toLowerCase() === filterText.toLowerCase()
      })
    }
  }

}