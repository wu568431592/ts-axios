import rewire from "rewire"
const axios = rewire("./axios")
const createInstance = axios.__get__("createInstance")
// @ponicode
describe("createInstance", () => {
    test("0", () => {
        let object: any = [{}, {}, {}, {}, {}]
        let callFunction: any = () => {
            createInstance({ url: "https://", method: "POST", data: true, params: "www.google.com", headers: 500, responseType: "blob", timeout: 60, transformRequest: {}, transformResponse: object, cancelToken: { promise: { message: "invalid option" }, reason: { message: "TrainerCourseDetailError: Either not an ajax call or not a GET request!!!" } }, withCredentials: false, xsrfCookieName: "dummyName", xsrfHeaderName: "This is a Text", onDownloadProgress: () => undefined, onUploadProgress: () => undefined, auth: { username: "user-name", password: "!Lov3MyPianoPony" }, validateStatus: () => false, paramsSerializer: () => "dummyName", baseURL: "https://accounts.google.com/o/oauth2/revoke?token=%s", key0: "Foo bar" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            createInstance({ url: "ponicode.com", method: "HEAD", data: 11, params: 1000, headers: false, responseType: "blob", timeout: 2, transformRequest: {}, transformResponse: {}, cancelToken: { promise: { message: "No response" }, reason: { message: "Sorry, This video cannot be accessed via this website" } }, withCredentials: true, xsrfCookieName: "dummy_name/", xsrfHeaderName: "foo bar", onDownloadProgress: () => undefined, onUploadProgress: () => undefined, auth: { username: "user123", password: "1Ki77y" }, validateStatus: () => false, paramsSerializer: () => "dummyname", baseURL: "Www.GooGle.com", key0: "foo bar" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let object: any = [{}, {}, {}, {}, {}]
        let callFunction: any = () => {
            createInstance({ url: "ponicode.com", method: "POST", data: false, params: "http://www.croplands.org/account/confirm?t=", headers: 500, responseType: "blob", timeout: 150, transformRequest: {}, transformResponse: object, cancelToken: { promise: { message: "Empty name specified" }, reason: { message: "Error getting key from: %s" } }, withCredentials: false, xsrfCookieName: "dummyName", xsrfHeaderName: "foo bar", onDownloadProgress: () => undefined, onUploadProgress: () => undefined, auth: { username: "user-name", password: ".Matrix53" }, validateStatus: () => true, paramsSerializer: () => "$dummy_name", baseURL: "http://www.croplands.org/account/confirm?t=", key0: "Foo bar" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let object: any = [{}]
        let callFunction: any = () => {
            createInstance({ url: "https://twitter.com/path?abc", method: "delete", data: 256, params: 1, headers: "DELETE", responseType: "text", timeout: 0, transformRequest: {}, transformResponse: object, cancelToken: { promise: { message: "Unable to find your git executable - Shutdown SickBeard and EITHER <a href=\"http://code.google.com/p/sickbeard/wiki/AdvancedSettings\" onclick=\"window.open(this.href); return false;\">set git_path in your config.ini</a> OR delete your .git folder and run from source to enable updates." }, reason: { message: "Counterparty sent error: %s" } }, withCredentials: false, xsrfCookieName: "/dummy_name", xsrfHeaderName: "Hello, world!", onDownloadProgress: () => undefined, onUploadProgress: () => undefined, auth: { username: "username", password: "1Ki77y" }, validateStatus: () => true, paramsSerializer: () => "dummy_name/", baseURL: "www.google.com" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let object: any = [{}, {}, {}, {}, {}]
        let callFunction: any = () => {
            createInstance({ url: "https://twitter.com/path?abc", method: "POST", data: false, params: "https://accounts.google.com/o/oauth2/revoke?token=%s", headers: 429, responseType: "blob", timeout: 15, transformRequest: {}, transformResponse: object, cancelToken: { promise: { message: "Invalid Invitation Token." }, reason: { message: "Message recipient is the same as originator" } }, withCredentials: true, xsrfCookieName: "DUMMYNAME", xsrfHeaderName: "foo bar", onDownloadProgress: () => undefined, onUploadProgress: () => undefined, auth: { username: "username", password: "1Ki77y" }, validateStatus: () => true, paramsSerializer: () => "dummyName", baseURL: "http://base.com", key0: "Hello, world!" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            createInstance({ url: "", method: "POST", data: true, params: "", headers: -Infinity, responseType: "blob", timeout: Infinity, transformRequest: {}, transformResponse: [], cancelToken: { promise: { message: "" }, reason: { message: "" } }, withCredentials: true, xsrfCookieName: "", xsrfHeaderName: "", onDownloadProgress: () => undefined, onUploadProgress: () => undefined, auth: { username: "", password: "" }, validateStatus: () => true, paramsSerializer: () => "", baseURL: "", key0: "" })
        }
    
        expect(callFunction).not.toThrow()
    })
})
