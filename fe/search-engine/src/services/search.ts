import Axios from 'axios';
import { CONFIG_VARS } from '../config';

export const search = async (searchKey: string) => await Axios.get(`${CONFIG_VARS.API_URL}/search?q=${searchKey}`);