import * as UserAPIUtil from '../util/user_api_utils';
import { receiveCurrentUser } from './session'


export const updateBuyingPower = (buyingPower, id) => dispatch => (
  UserAPIUtil.updateBuyingPower(buyingPower, id).then((user) => dispatch(receiveCurrentUser(user)))
)