import { AuthChecker } from 'type-graphql'
import { CustomContext } from './Authorize';
export const customAuthChecker: AuthChecker<CustomContext> = (
    { root, args, context, info },
    roles,
  ) => {
      debugger;
    // here we can read the user from context
    // and check his permission in the db against the `roles` argument
    // that comes from the `@Authorized` decorator, eg. ["ADMIN", "MODERATOR"]
    console.log(context.user)
    if(context.user == null) {
        return false
    } else {
        return true
    }
    return true; // or false if access is denied
  };