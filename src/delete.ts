import { AbstractDeleteOperation, TApiDeleteRequest } from '../lib/LambdaClasses/AbstractDeleteOperation'
import { TApiResponse } from '../lib/LambdaClasses/Response.class'
import { Context, Callback } from 'aws-lambda'


export function handler(incomingRequest:TApiDeleteRequest, context:Context, callback:Callback) {

  class HandlerObject extends AbstractDeleteOperation {
    protected request:TApiDeleteRequest
    protected response:TApiResponse


    constructor(incomingRequest:TApiDeleteRequest, context:Context, callback:Callback) {
      super(incomingRequest, context, callback)
    }


  } // End Handler Class ---------

  new HandlerObject(incomingRequest, context, callback)

} // End Main Handler Function -------
