import type {Alpine} from 'alpinejs';
import { navigationController } from '@stores/navigation-controller';

export default (alpine:Alpine) => {
    navigationController(alpine)
}