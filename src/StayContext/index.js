import { createContext } from 'react';
import Stays from '../stays.json';

const staysContext = createContext(Stays);

export default staysContext;
