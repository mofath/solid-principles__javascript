class ErrorHandler {

    static handle() {
        if (response.status == 401) {
            console.log(`You are not authorized to view this content`);
        } else if (response.status == 500) {
            console.log('Internal server error');
        }
        else if (response.status == 404) {
            console.log('Internal server error');
        }
        else {
            console.log('Unkown error');
        }
    }

}