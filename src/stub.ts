// 这个文件由 https://code.qiyutech.tech/docs 自动生成
// 请不要使用手工修改
import * as dt from "./dt";


export class BrowserList {
    /**
     * None
     */
    public static async do_get(
        args: {
            security: SecurityParamsType,
        },
        success_cb: (resp: Response) => Promise<Record<string, unknown>> = null,
        failure_cb: (resp: Response) => Promise<any> = null,
    ): Promise<Record<string, unknown>> {
        return await doRequest({
            method: "GET",
            base_url: getGlobalBaseUrl(),
            path_url: "/browser/list",
            path_args: args["path_args"] || null,
            query_args: args["query_args"] || null,
            header: args["header"] || null,
            body: args["body"] || null,
            security: args["security"] || null,
        }, success_cb, failure_cb);
    }


}

export class Browser {
    /**
     * None
     */
    public static async do_get(
        args: {
            query_args: { name?: string },
            security: SecurityParamsType,
        },
        success_cb: (resp: Response) => Promise<dt.BrowserData> = null,
        failure_cb: (resp: Response) => Promise<any> = null,
    ): Promise<dt.BrowserData> {
        return await doRequest({
            method: "GET",
            base_url: getGlobalBaseUrl(),
            path_url: "/browser",
            path_args: args["path_args"] || null,
            query_args: args["query_args"] || null,
            header: args["header"] || null,
            body: args["body"] || null,
            security: args["security"] || null,
        }, success_cb, failure_cb);
    }

    /**
     * None
     */
    public static async do_put(
        args: {
            body: dt.BrowserData,
            security: SecurityParamsType,
        },
        success_cb: (resp: Response) => Promise<Record<string, unknown>> = null,
        failure_cb: (resp: Response) => Promise<any> = null,
    ): Promise<Record<string, unknown>> {
        return await doRequest({
            method: "PUT",
            base_url: getGlobalBaseUrl(),
            path_url: "/browser",
            path_args: args["path_args"] || null,
            query_args: args["query_args"] || null,
            header: args["header"] || null,
            body: args["body"] || null,
            security: args["security"] || null,
        }, success_cb, failure_cb);
    }

    /**
     * None
     */
    public static async do_delete(
        args: {
            query_args: { name?: string },
            security: SecurityParamsType,
        },
        success_cb: (resp: Response) => Promise<Record<string, unknown>> = null,
        failure_cb: (resp: Response) => Promise<any> = null,
    ): Promise<Record<string, unknown>> {
        return await doRequest({
            method: "DELETE",
            base_url: getGlobalBaseUrl(),
            path_url: "/browser",
            path_args: args["path_args"] || null,
            query_args: args["query_args"] || null,
            header: args["header"] || null,
            body: args["body"] || null,
            security: args["security"] || null,
        }, success_cb, failure_cb);
    }

}

export class Cc {

    /**
     * None
     */
    public static async do_put(
        args: {
            body: dt.CcJobData,
            security: SecurityParamsType,
        },
        success_cb: (resp: Response) => Promise<Record<string, unknown>> = null,
        failure_cb: (resp: Response) => Promise<any> = null,
    ): Promise<Record<string, unknown>> {
        return await doRequest({
            method: "PUT",
            base_url: getGlobalBaseUrl(),
            path_url: "/cc",
            path_args: args["path_args"] || null,
            query_args: args["query_args"] || null,
            header: args["header"] || null,
            body: args["body"] || null,
            security: args["security"] || null,
        }, success_cb, failure_cb);
    }

    /**
     * None
     */
    public static async do_delete(
        args: {
            query_args: { name?: string },
            security: SecurityParamsType,
        },
        success_cb: (resp: Response) => Promise<Record<string, unknown>> = null,
        failure_cb: (resp: Response) => Promise<any> = null,
    ): Promise<Record<string, unknown>> {
        return await doRequest({
            method: "DELETE",
            base_url: getGlobalBaseUrl(),
            path_url: "/cc",
            path_args: args["path_args"] || null,
            query_args: args["query_args"] || null,
            header: args["header"] || null,
            body: args["body"] || null,
            security: args["security"] || null,
        }, success_cb, failure_cb);
    }

}

export class CcList {


    /**
     * None
     */
    public static async do_post(
        args: {
            body: dt.CCJobListArgs,
            security: SecurityParamsType,
        },
        success_cb: (resp: Response) => Promise<Record<string, unknown>> = null,
        failure_cb: (resp: Response) => Promise<any> = null,
    ): Promise<Record<string, unknown>> {
        return await doRequest({
            method: "POST",
            base_url: getGlobalBaseUrl(),
            path_url: "/cc/list",
            path_args: args["path_args"] || null,
            query_args: args["query_args"] || null,
            header: args["header"] || null,
            body: args["body"] || null,
            security: args["security"] || null,
        }, success_cb, failure_cb);
    }


}

export class CcTotal {
    /**
     * None
     */
    public static async do_get(
        args: {
            security: SecurityParamsType,
        },
        success_cb: (resp: Response) => Promise<Record<string, unknown>> = null,
        failure_cb: (resp: Response) => Promise<any> = null,
    ): Promise<Record<string, unknown>> {
        return await doRequest({
            method: "GET",
            base_url: getGlobalBaseUrl(),
            path_url: "/cc/total",
            path_args: args["path_args"] || null,
            query_args: args["query_args"] || null,
            header: args["header"] || null,
            body: args["body"] || null,
            security: args["security"] || null,
        }, success_cb, failure_cb);
    }


}

export class Ci {


    /**
     * None
     */
    public static async do_post(
        args: {
            body: dt.RestCiArgs,
            security: SecurityParamsType,
        },
        success_cb: (resp: Response) => Promise<dt.RestCiResp> = null,
        failure_cb: (resp: Response) => Promise<any> = null,
    ): Promise<dt.RestCiResp> {
        return await doRequest({
            method: "POST",
            base_url: getGlobalBaseUrl(),
            path_url: "/ci",
            path_args: args["path_args"] || null,
            query_args: args["query_args"] || null,
            header: args["header"] || null,
            body: args["body"] || null,
            security: args["security"] || null,
        }, success_cb, failure_cb);
    }


}

export class CodeList {
    /**
     * None
     */
    public static async do_get(
        args: {
            query_args: { name?: string, page_no?: string, page_size?: string },
            security: SecurityParamsType,
        },
        success_cb: (resp: Response) => Promise<Record<string, unknown>> = null,
        failure_cb: (resp: Response) => Promise<any> = null,
    ): Promise<Record<string, unknown>> {
        return await doRequest({
            method: "GET",
            base_url: getGlobalBaseUrl(),
            path_url: "/code/list",
            path_args: args["path_args"] || null,
            query_args: args["query_args"] || null,
            header: args["header"] || null,
            body: args["body"] || null,
            security: args["security"] || null,
        }, success_cb, failure_cb);
    }


}

export class Code {
    /**
     * None
     */
    public static async do_get(
        args: {
            query_args: { name?: string },
            security: SecurityParamsType,
        },
        success_cb: (resp: Response) => Promise<dt.CodeData> = null,
        failure_cb: (resp: Response) => Promise<any> = null,
    ): Promise<dt.CodeData> {
        return await doRequest({
            method: "GET",
            base_url: getGlobalBaseUrl(),
            path_url: "/code",
            path_args: args["path_args"] || null,
            query_args: args["query_args"] || null,
            header: args["header"] || null,
            body: args["body"] || null,
            security: args["security"] || null,
        }, success_cb, failure_cb);
    }

    /**
     * None
     */
    public static async do_put(
        args: {
            body: dt.CodeData,
            security: SecurityParamsType,
        },
        success_cb: (resp: Response) => Promise<Record<string, unknown>> = null,
        failure_cb: (resp: Response) => Promise<any> = null,
    ): Promise<Record<string, unknown>> {
        return await doRequest({
            method: "PUT",
            base_url: getGlobalBaseUrl(),
            path_url: "/code",
            path_args: args["path_args"] || null,
            query_args: args["query_args"] || null,
            header: args["header"] || null,
            body: args["body"] || null,
            security: args["security"] || null,
        }, success_cb, failure_cb);
    }

    /**
     * None
     */
    public static async do_delete(
        args: {
            query_args: { name?: string },
            security: SecurityParamsType,
        },
        success_cb: (resp: Response) => Promise<Record<string, unknown>> = null,
        failure_cb: (resp: Response) => Promise<any> = null,
    ): Promise<Record<string, unknown>> {
        return await doRequest({
            method: "DELETE",
            base_url: getGlobalBaseUrl(),
            path_url: "/code",
            path_args: args["path_args"] || null,
            query_args: args["query_args"] || null,
            header: args["header"] || null,
            body: args["body"] || null,
            security: args["security"] || null,
        }, success_cb, failure_cb);
    }

}

export class CrawlStart {


    /**
     * None
     */
    public static async do_post(
        args: {
            body: dt.ApiNameDt,
            security: SecurityParamsType,
        },
        success_cb: (resp: Response) => Promise<Record<string, unknown>> = null,
        failure_cb: (resp: Response) => Promise<any> = null,
    ): Promise<Record<string, unknown>> {
        return await doRequest({
            method: "POST",
            base_url: getGlobalBaseUrl(),
            path_url: "/crawl/start",
            path_args: args["path_args"] || null,
            query_args: args["query_args"] || null,
            header: args["header"] || null,
            body: args["body"] || null,
            security: args["security"] || null,
        }, success_cb, failure_cb);
    }


}

export class CrawlStop {


    /**
     * None
     */
    public static async do_post(
        args: {
            body: dt.ApiNameDt,
            security: SecurityParamsType,
        },
        success_cb: (resp: Response) => Promise<Record<string, unknown>> = null,
        failure_cb: (resp: Response) => Promise<any> = null,
    ): Promise<Record<string, unknown>> {
        return await doRequest({
            method: "POST",
            base_url: getGlobalBaseUrl(),
            path_url: "/crawl/stop",
            path_args: args["path_args"] || null,
            query_args: args["query_args"] || null,
            header: args["header"] || null,
            body: args["body"] || null,
            security: args["security"] || null,
        }, success_cb, failure_cb);
    }


}

export class Crawl {
    /**
     * None
     */
    public static async do_get(
        args: {
            query_args: { name?: string },
            security: SecurityParamsType,
        },
        success_cb: (resp: Response) => Promise<dt.CrawlTaskData> = null,
        failure_cb: (resp: Response) => Promise<any> = null,
    ): Promise<dt.CrawlTaskData> {
        return await doRequest({
            method: "GET",
            base_url: getGlobalBaseUrl(),
            path_url: "/crawl",
            path_args: args["path_args"] || null,
            query_args: args["query_args"] || null,
            header: args["header"] || null,
            body: args["body"] || null,
            security: args["security"] || null,
        }, success_cb, failure_cb);
    }

    /**
     * None
     */
    public static async do_put(
        args: {
            body: dt.CrawlTaskData,
            security: SecurityParamsType,
        },
        success_cb: (resp: Response) => Promise<Record<string, unknown>> = null,
        failure_cb: (resp: Response) => Promise<any> = null,
    ): Promise<Record<string, unknown>> {
        return await doRequest({
            method: "PUT",
            base_url: getGlobalBaseUrl(),
            path_url: "/crawl",
            path_args: args["path_args"] || null,
            query_args: args["query_args"] || null,
            header: args["header"] || null,
            body: args["body"] || null,
            security: args["security"] || null,
        }, success_cb, failure_cb);
    }

    /**
     * None
     */
    public static async do_delete(
        args: {
            query_args: { name?: string },
            security: SecurityParamsType,
        },
        success_cb: (resp: Response) => Promise<Record<string, unknown>> = null,
        failure_cb: (resp: Response) => Promise<any> = null,
    ): Promise<Record<string, unknown>> {
        return await doRequest({
            method: "DELETE",
            base_url: getGlobalBaseUrl(),
            path_url: "/crawl",
            path_args: args["path_args"] || null,
            query_args: args["query_args"] || null,
            header: args["header"] || null,
            body: args["body"] || null,
            security: args["security"] || null,
        }, success_cb, failure_cb);
    }

}

export class CrawlList {
    /**
     * None
     */
    public static async do_get(
        args: {
            query_args: { crawl_name?: string, page_no?: string, page_size?: string },
            security: SecurityParamsType,
        },
        success_cb: (resp: Response) => Promise<Record<string, unknown>> = null,
        failure_cb: (resp: Response) => Promise<any> = null,
    ): Promise<Record<string, unknown>> {
        return await doRequest({
            method: "GET",
            base_url: getGlobalBaseUrl(),
            path_url: "/crawl/list",
            path_args: args["path_args"] || null,
            query_args: args["query_args"] || null,
            header: args["header"] || null,
            body: args["body"] || null,
            security: args["security"] || null,
        }, success_cb, failure_cb);
    }


}

export class Monitor {
    /**
     * None
     */
    public static async do_get(
        args: {
            query_args: { name?: string },
            security: SecurityParamsType,
        },
        success_cb: (resp: Response) => Promise<dt.MonitorTaskData> = null,
        failure_cb: (resp: Response) => Promise<any> = null,
    ): Promise<dt.MonitorTaskData> {
        return await doRequest({
            method: "GET",
            base_url: getGlobalBaseUrl(),
            path_url: "/monitor",
            path_args: args["path_args"] || null,
            query_args: args["query_args"] || null,
            header: args["header"] || null,
            body: args["body"] || null,
            security: args["security"] || null,
        }, success_cb, failure_cb);
    }

    /**
     * None
     */
    public static async do_put(
        args: {
            body: dt.MonitorTaskData,
            security: SecurityParamsType,
        },
        success_cb: (resp: Response) => Promise<Record<string, unknown>> = null,
        failure_cb: (resp: Response) => Promise<any> = null,
    ): Promise<Record<string, unknown>> {
        return await doRequest({
            method: "PUT",
            base_url: getGlobalBaseUrl(),
            path_url: "/monitor",
            path_args: args["path_args"] || null,
            query_args: args["query_args"] || null,
            header: args["header"] || null,
            body: args["body"] || null,
            security: args["security"] || null,
        }, success_cb, failure_cb);
    }

    /**
     * None
     */
    public static async do_delete(
        args: {
            query_args: { name?: string },
            security: SecurityParamsType,
        },
        success_cb: (resp: Response) => Promise<Record<string, unknown>> = null,
        failure_cb: (resp: Response) => Promise<any> = null,
    ): Promise<Record<string, unknown>> {
        return await doRequest({
            method: "DELETE",
            base_url: getGlobalBaseUrl(),
            path_url: "/monitor",
            path_args: args["path_args"] || null,
            query_args: args["query_args"] || null,
            header: args["header"] || null,
            body: args["body"] || null,
            security: args["security"] || null,
        }, success_cb, failure_cb);
    }

}

export class Pdf {


    /**
     * None
     */
    public static async do_post(
        args: {
            body: dt.PdfArgs,
            security: SecurityParamsType,
        },
        success_cb: (resp: Response) => Promise<Record<string, unknown>> = null,
        failure_cb: (resp: Response) => Promise<any> = null,
    ): Promise<Record<string, unknown>> {
        return await doRequest({
            method: "POST",
            base_url: getGlobalBaseUrl(),
            path_url: "/pdf",
            path_args: args["path_args"] || null,
            query_args: args["query_args"] || null,
            header: args["header"] || null,
            body: args["body"] || null,
            security: args["security"] || null,
        }, success_cb, failure_cb);
    }


}

export class Html {


    /**
     * None
     */
    public static async do_post(
        args: {
            body: dt.HtmlArgs,
            security: SecurityParamsType,
        },
        success_cb: (resp: Response) => Promise<Record<string, unknown>> = null,
        failure_cb: (resp: Response) => Promise<any> = null,
    ): Promise<Record<string, unknown>> {
        return await doRequest({
            method: "POST",
            base_url: getGlobalBaseUrl(),
            path_url: "/html",
            path_args: args["path_args"] || null,
            query_args: args["query_args"] || null,
            header: args["header"] || null,
            body: args["body"] || null,
            security: args["security"] || null,
        }, success_cb, failure_cb);
    }


}

export class SandboxFunc {


    /**
     * None
     */
    public static async do_post(
        args: {
            body: dt.RestSandboxRunFuncArgs,
            security: SecurityParamsType,
        },
        success_cb: (resp: Response) => Promise<Record<string, unknown>> = null,
        failure_cb: (resp: Response) => Promise<any> = null,
    ): Promise<Record<string, unknown>> {
        return await doRequest({
            method: "POST",
            base_url: getGlobalBaseUrl(),
            path_url: "/sandbox/func",
            path_args: args["path_args"] || null,
            query_args: args["query_args"] || null,
            header: args["header"] || null,
            body: args["body"] || null,
            security: args["security"] || null,
        }, success_cb, failure_cb);
    }


}

export class SandboxCode {


    /**
     * None
     */
    public static async do_post(
        args: {
            body: dt.RestSandboxRunCodeArgs,
            security: SecurityParamsType,
        },
        success_cb: (resp: Response) => Promise<Record<string, unknown>> = null,
        failure_cb: (resp: Response) => Promise<any> = null,
    ): Promise<Record<string, unknown>> {
        return await doRequest({
            method: "POST",
            base_url: getGlobalBaseUrl(),
            path_url: "/sandbox/code",
            path_args: args["path_args"] || null,
            query_args: args["query_args"] || null,
            header: args["header"] || null,
            body: args["body"] || null,
            security: args["security"] || null,
        }, success_cb, failure_cb);
    }


}

export class SearchEngineAll {
    /**
     * None
     */
    public static async do_get(
        args: {
            security: SecurityParamsType,
        },
        success_cb: (resp: Response) => Promise<Record<string, unknown>> = null,
        failure_cb: (resp: Response) => Promise<any> = null,
    ): Promise<Record<string, unknown>> {
        return await doRequest({
            method: "GET",
            base_url: getGlobalBaseUrl(),
            path_url: "/search_engine/all",
            path_args: args["path_args"] || null,
            query_args: args["query_args"] || null,
            header: args["header"] || null,
            body: args["body"] || null,
            security: args["security"] || null,
        }, success_cb, failure_cb);
    }


}

export class SearchEngine {
    /**
     * None
     */
    public static async do_get(
        args: {
            query_args: { name?: string },
            security: SecurityParamsType,
        },
        success_cb: (resp: Response) => Promise<dt.SearchEngineData> = null,
        failure_cb: (resp: Response) => Promise<any> = null,
    ): Promise<dt.SearchEngineData> {
        return await doRequest({
            method: "GET",
            base_url: getGlobalBaseUrl(),
            path_url: "/search_engine",
            path_args: args["path_args"] || null,
            query_args: args["query_args"] || null,
            header: args["header"] || null,
            body: args["body"] || null,
            security: args["security"] || null,
        }, success_cb, failure_cb);
    }

    /**
     * None
     */
    public static async do_put(
        args: {
            body: dt.SearchEngineData,
            security: SecurityParamsType,
        },
        success_cb: (resp: Response) => Promise<Record<string, unknown>> = null,
        failure_cb: (resp: Response) => Promise<any> = null,
    ): Promise<Record<string, unknown>> {
        return await doRequest({
            method: "PUT",
            base_url: getGlobalBaseUrl(),
            path_url: "/search_engine",
            path_args: args["path_args"] || null,
            query_args: args["query_args"] || null,
            header: args["header"] || null,
            body: args["body"] || null,
            security: args["security"] || null,
        }, success_cb, failure_cb);
    }

    /**
     * None
     */
    public static async do_delete(
        args: {
            query_args: { name?: string },
            security: SecurityParamsType,
        },
        success_cb: (resp: Response) => Promise<Record<string, unknown>> = null,
        failure_cb: (resp: Response) => Promise<any> = null,
    ): Promise<Record<string, unknown>> {
        return await doRequest({
            method: "DELETE",
            base_url: getGlobalBaseUrl(),
            path_url: "/search_engine",
            path_args: args["path_args"] || null,
            query_args: args["query_args"] || null,
            header: args["header"] || null,
            body: args["body"] || null,
            security: args["security"] || null,
        }, success_cb, failure_cb);
    }

}

export class Search {


    /**
     * None
     */
    public static async do_post(
        args: {
            body: dt.RestKeywordSearchArgs,
            security: SecurityParamsType,
        },
        success_cb: (resp: Response) => Promise<Record<string, unknown>> = null,
        failure_cb: (resp: Response) => Promise<any> = null,
    ): Promise<Record<string, unknown>> {
        return await doRequest({
            method: "POST",
            base_url: getGlobalBaseUrl(),
            path_url: "/search",
            path_args: args["path_args"] || null,
            query_args: args["query_args"] || null,
            header: args["header"] || null,
            body: args["body"] || null,
            security: args["security"] || null,
        }, success_cb, failure_cb);
    }


}


const g_default_base_url = "http://127.0.0.1:18082/v1";
let g_base_url: string | null = null;


export function setGlobalBaseUrl(g_url: string | null): void {
    g_base_url = g_url
}

export function getGlobalBaseUrl(): string | null {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return g_base_url || g_default_base_url
}

export interface SecurityParamsType {
    // http bearer 认证
    // MDN: https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Authentication
    // RFC: https://datatracker.ietf.org/doc/html/rfc6750#section-2.1
    bearer: string
}


export interface GenRequestArgs<PathParamsType, QueryParamsType, HeaderParamsType, BodyParamsType> {
    path_args: PathParamsType    // path_args with replace path_url with real value
    query_args: QueryParamsType  // query_args
    header: HeaderParamsType     // HTTP request header
    body: BodyParamsType         // HTTP request body
    security?: SecurityParamsType // API Auth method
}

export interface GenRequestParams<PathParamsType, QueryParamsType, HeaderParamsType, BodyParamsType> {
    method: string                // request method GET|PUT|DELETE...
    base_url: string              // base url for server
    path_url: string              // path url may encode with args: {args}
    path_args?: PathParamsType    // path_args with replace path_url with real value
    query_args?: QueryParamsType  // query_args
    header?: HeaderParamsType     // HTTP request header
    body?: BodyParamsType         // HTTP request body
    security?: SecurityParamsType // HTTP auth method
}


async function doRequest<PathParamsType, QueryParamsType, HeaderParamsType, BodyParamsType, SuccessRet, FailureRet = Record<string, unknown>>(
    args: GenRequestParams<PathParamsType, QueryParamsType, HeaderParamsType, BodyParamsType>,
    success_cb: (resp: Response) => Promise<SuccessRet> = null,
    failure_cb: (resp: Response) => Promise<FailureRet> = null,
): Promise<SuccessRet | FailureRet | null> {
    function buildUrl() {
        if (!args.path_args) {
            return args.base_url + args.path_url
        }
        const path_url = args.path_url;
        const parts = path_url.split("/")
        const full_path = parts.map((url_part) => {
            if (url_part.startsWith("{") && url_part.endsWith("}")) {
                return args.path_args[url_part.substring(1, url_part.length - 1)]
            } else {
                return url_part
            }
        }).join("/")

        return args.base_url + full_path
    }

    function buildQuery() {
        if (!args.query_args) {
            return "";
        }
        const query = new URLSearchParams(args.query_args as any as Record<string, string>)

        return "?" + query.toString()
    }

    function buildBody(): string | null {
        if (!args.body) {
            return null;
        }
        return JSON.stringify(args.body)
    }

    const url = buildUrl() + buildQuery();
    const header = args.header as any as Record<string, string> || {"Accept-Type": "application/json"}
    const body = buildBody();

    const bearer = args.security?.bearer;
    if (bearer) {
        header["Authorization"] = `Bearer ${bearer}`
    }
    // default use json
    if (body && !header['Content-Type']) {
        header['Content-Type'] = 'application/json';
    }

    const resp = await fetch(url, {method: args.method, headers: header, body: body})

    if (resp.ok) {
        if (success_cb) {
            return await success_cb(resp)
        } else {
            return await resp.json() as SuccessRet;
        }
    } else {
        if (failure_cb) {
            return await failure_cb(resp)
        } else { // do nothing
            return null;
        }
    }
}

