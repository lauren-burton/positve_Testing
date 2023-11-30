import { $ } from '@wdio/globals'
import Page from './page.js';


class SecurePage extends Page {
  
    get inventoryList () {
        return $('#item_4_title_link');
    }

    get stayOnPage () {
        return $('.error-button')
    }
}

export default new SecurePage();
