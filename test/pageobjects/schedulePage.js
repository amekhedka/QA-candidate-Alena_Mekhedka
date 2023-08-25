class SchedulePage {

    get locationSelector () {
        return $('//div[@data-testid=\'quickSelector.locationSelector\']');
    }

    get locationWA () {
        return $('//div[@id=\'quick-selector-option-location-vancouver--wa\']');
    }

    get serviceSelector () {
        return $('//div[@data-testid=\'quickSelector.serviceSelector\']');
    }

    get primaryCareOption () {
        return $('//div[@id=\'quick-selector-option-service-primary-care\']');
    }

    get dateSelector () {
        return $('//div[@data-testid=\'quickSelector.dateSelector\']');
    }

    get searchBtn () {
        return $('//div[@data-testid=\'button-quickSelector.searchButton\']');
    }

    get primaryCareTitle () {
        return $('//div/h1[text()=\'Primary Care\']');
    }

    get timeBtn () {
        return $('(//div[@role=\'button\'])[2]');
    }

    get cancelBookingBtn  () {
        return $('//div[@id=\'undefined-pretty-alert-button-Cancel Booking\']');
    }

    get refreshBtn  () {
        return $('//div[@id=\'quickSelectorSubmit\']');
    }

    get loadText  () {
        return $('//div[text()=\'Hang tight—finding your care.\']');
    }
}

module.exports = new SchedulePage()

