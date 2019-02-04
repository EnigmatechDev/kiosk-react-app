// change to false to turn off debug logging
const logger_debug = true

const appLog = ( message ) => {
	if ( logger_debug ) {
		console.log( message )
	}
}

export default appLog