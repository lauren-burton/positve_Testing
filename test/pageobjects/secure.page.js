import { $ } from '@wdio/globals'
import Page from './page.js';


class SecurePage extends Page {
  
    get inventoryList () {
        return $('#item_4_title_link');
    }
}

export default new SecurePage();
