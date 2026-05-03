///<reference types="cypress"/>

import HomePage from '../pages/HomePage'

describe('Home Page', () => {

  it('verify homepage sections', () => {

    HomePage.visit()
    HomePage.checkImagesLoaded()
    HomePage.checkSiteLoaded()
    HomePage.checkNavigation()

  })

} )