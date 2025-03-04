from callbacks import (
    callback_api_events,
    callback_index,
    callback_api_query_shelter,
    callback_api_query_fault,
    callback_api_query_volcanoes,
    callback_api_query_boundary,
    callback_api_report,
    callback_api_query_reports,
    callback_api_query_roadname,
    callback_api_query_getstamps,
    callback_api_query_getqsls
)
from server import start_server
from template import RouterItem


def main():
    #注册路由
    routers: list[RouterItem] = [
        {
            "path": "/",
            "method": ["GET", "POST"],
            "handler": callback_index,
        },
        {
            "path": "/api/events",
            "method": ["GET", "POST"],
            "handler": callback_api_events,
        },
        {
            "path": "/api/shelter",
            "method": ["GET", "POST"],
            "handler": callback_api_query_shelter,
        },
        {
            "path": "/api/fault",
            "method": ["GET", "POST"],
            "handler": callback_api_query_fault,
        },
        {
            "path": "/api/volcanoes",
            "method": ["GET", "POST"],
            "handler": callback_api_query_volcanoes,
        },
        {
            "path": "/api/boundary",
            "method": ["GET", "POST"],
            "handler": callback_api_query_boundary,
        },
        {
            "path": "/api/report",
            "method": ["GET", "POST"],
            "handler": callback_api_report,
        },
        {
            "path": "/api/getreport",
            "method": ["GET", "POST"],
            "handler": callback_api_query_reports,
        },
        {
            "path": "/api/roadname",
            "method": ["GET", "POST"],
            "handler": callback_api_query_roadname,
        },
        {
            "path": "/api/getstamps",
            "method": ["GET", "POST"],
            "handler": callback_api_query_getstamps,
        },
        {
            "path": "/api/getqsls",
            "method": ["GET", "POST"],
            "handler": callback_api_query_getqsls,
        },
    ]
    #开启服务器
    start_server("127.0.0.1", 8080, routers)

if __name__ == "__main__":
    main()
