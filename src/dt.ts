// 这个文件由 https://code.qiyutech.tech/docs 自动生成
// 请不要使用手工修改

export interface BrowserData {
    _id?: string /* _id */
    name?: string /* name */
    headless?: boolean /* headless */
    adblock?: boolean /* adblock */
    proxy?: string /* proxy */
    location?: string /* location */
    config?: string /* config */
}

export interface CodeFnArgConfig {
    arg_name?: string /* arg_name */
    arg_type?: string /* arg_type */
    arg_value?: string /* arg_value */
    arg_help?: string /* arg_help */
}

export interface CodeFnQueueConfig {
    queue_name?: string /* queue_name */
    queue_help?: string /* queue_help */
}

export interface CodeData {
    _id?: string /* _id */
    fn_name?: string /* fn_name */
    fn_code?: string /* fn_code */
    fn_summary?: string /* fn_summary */
    fn_detail?: string /* fn_detail */
    fn_mode?: string /* fn_mode */
    fn_config?: CodeFnArgConfig[] /* fn_config */
    fn_queue?: CodeFnQueueConfig[] /* fn_queue */
    view_code?: string /* view_code */
}

export interface ApiNameDt {
    name?: string /* name */
}

export interface CrawlTaskV2Config {
    queue_name?: string /* queue_name */
    fn_name?: string /* fn_name */
    fn_config?: CodeFnArgConfig[] /* fn_config */
}

export interface CrawlTaskGenericConfig {
    v2?: CrawlTaskV2Config[] /* v2 */
}

export interface CrawlTaskData {
    _id?: string /* _id */
    crawl_name?: string /* crawl_name */
    crawl_config?: CrawlTaskGenericConfig /* None */
    crawl_desc?: string /* crawl_desc */
    browser_name?: string /* browser_name */
    concurrent?: number /* concurrent */
    init_urls?: string /* init_urls */
    depth_limit?: number /* depth_limit */
    page_limit?: number /* page_limit */
    time_limit?: number /* time_limit */
    timeout?: number /* timeout */
    record_snapshot?: boolean /* record_snapshot */
    record_rrweb?: boolean /* record_rrweb */
    record_video?: boolean /* record_video */
    run_state?: string /* run_state */
    pause_reason?: string /* pause_reason */
    run_page?: number /* run_page */
    run_time?: number /* run_time */
    ctime?: string /* ctime */
}

export interface MonitorTaskData {
    _id?: string /* _id */
    task_name?: string /* task_name */
    url?: string /* url */
    browser_name?: string /* browser_name */
    fn_name?: string /* fn_name */
    cron_rule?: string /* cron_rule */
    pre_time?: string /* pre_time */
    next_time?: string /* next_time */
    status?: string /* status */
    http_code?: number /* http_code */
    fail_counter?: number /* fail_counter */
    fail_alert?: number /* fail_alert */
    failure_webhook?: string /* failure_webhook */
    success_webhook?: string /* success_webhook */
    change_webhook?: string /* change_webhook */
    pre_text?: object /* pre_text */
    cur_text?: object /* cur_text */
    cur_change?: boolean /* cur_change */
    cur_need_view?: boolean /* cur_need_view */
    record_log?: boolean /* record_log */
    record_snapshot?: boolean /* record_snapshot */
    record_pdf?: boolean /* record_pdf */
    record_rrweb?: boolean /* record_rrweb */
    record_video?: boolean /* record_video */
    running?: boolean /* running */
    timeout?: number /* timeout */
    enable?: boolean /* enable */
    valid?: boolean /* valid */
}

export interface PdfMargin {
    top?: number /* top */
    right?: number /* right */
    bottom?: number /* bottom */
    left?: number /* left */
}

export interface PdfPrintOptions {
    displayHeaderFooter?: boolean /* displayHeaderFooter */
    footerTemplate?: string /* footerTemplate */
    format?: string /* format */
    headerTemplate?: string /* headerTemplate */
    height?: number /* height */
    landscape?: boolean /* landscape */
    margin?: PdfMargin /* None */
    pageRanges?: string /* pageRanges */
    preferCSSPageSize?: boolean /* preferCSSPageSize */
    printBackground?: boolean /* printBackground */
    scale?: number /* scale */
    width?: number /* width */
}

export interface PdfArgs {
    url?: string /* url */
    options?: PdfPrintOptions /* None */
}

export interface HtmlArgs {
    url?: string /* url */
}

export interface RestSandboxRunFuncArgs {
    browser?: string /* browser */
    url?: string /* url */
    fn_name?: string /* fn_name */
    fn_args?: object /* fn_args */
}

export interface LogRecord {
    level?: string /* level */
    message?: string /* message */
    context?: object /* context */
}

export interface FnQueueUrl {
    queue_name?: string /* queue_name */
    url?: string /* url */
    title?: string /* title */
    inner_text?: string /* inner_text */
    inner_html?: string /* inner_html */
    not_inc_depth?: boolean /* not_inc_depth */
    add_if_before?: string /* add_if_before */
}

export interface SandboxRunResult {
    page_error?: string /* page_error */
    func_error?: string /* func_error */
    eval_error?: string /* eval_error */
    data?: object /* data */
    logs?: LogRecord[] /* logs */
    urls?: FnQueueUrl[] /* urls */
}

export interface RestSandboxRunCodeArgs {
    browser?: string /* browser */
    url?: string /* url */
    fn_code?: string /* fn_code */
    fn_args?: object /* fn_args */
}

export interface SearchEngineData {
    _id?: string /* _id */
    name?: string /* name */
    url?: string /* url */
    q_field?: string /* q_field */
    browser?: string /* browser */
    fn_name?: string /* fn_name */
    enable?: boolean /* enable */
}

export interface RestKeywordSearchArgs {
    keyword?: string /* keyword */
    se_list?: string[] /* se_list */
}

export interface SearchResultItem {
    summary?: string /* summary */
    url?: string /* url */
    title?: string /* title */
    innerText?: string /* innerText */
    innerHtml?: string /* innerHtml */
    isAd?: boolean /* isAd */
}

export interface SearchResultPage {
    page?: number /* page */
    url?: string /* url */
}

export interface BaiduHotData {
    position?: string /* position */
    title?: string /* title */
    url?: string /* url */
    inner_text?: string /* inner_text */
    hot_value?: string /* hot_value */
}

export interface BaiduNewsData {
    from_src?: string /* from_src */
}

export interface BaiduExtraData {
    hots?: BaiduHotData[] /* hots */
    news?: BaiduNewsData[] /* news */
}

export interface GoogleNewsData {
}

export interface GoogleExtraData {
    news?: GoogleNewsData[] /* news */
}

export interface SearchResultData {
    items?: SearchResultItem[] /* items */
    related?: string[] /* related */
    pages?: SearchResultPage[] /* pages */
    baidu?: BaiduExtraData /* None */
    google?: GoogleExtraData /* None */
}

export interface KeywordSearchResult {
    se_name?: string /* se_name */
    keyword?: string /* keyword */
    search_result?: SearchResultData /* None */
    func_log?: LogRecord[] /* func_log */
}

