import {base_url} from './Constants'
import axios from 'axios'

const instance = axios.create({
    baseURL: base_url
  });