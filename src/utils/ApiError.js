class ApiError extends Error{
    constructor(statusCode , messagee = "Something Went Wrong" , errors = [], statck = "" ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = messagee
        this.success = false;
        this.errors = errors

        if(statck){
            this.stack = statck;
        }
        else {
            Error.captureStackTrace(this , this.constructor)
        }
    }
}

export {ApiError}