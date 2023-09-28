using System;
using System.Net;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using System.Web.Http.Hosting;
using System.Web.Mvc;
using Umbraco.Core.Composing;

namespace YASMall_U8.App_Start
{
    public class ApplicationComponent : IComponent
    {
        public void Initialize()
        {
            // ApplicationStarted event in V7: add your events here
            MvcHandler.DisableMvcResponseHeader = true;
            System.Web.Helpers.AntiForgeryConfig.SuppressXFrameOptionsHeader = true;
            GlobalConfiguration.Configuration.MessageHandlers.Add(new WebApiCustomMessageHandler());
        }

        public void Terminate()
        { }
    }

    public class WebApiCustomMessageHandler : DelegatingHandler
    {
        protected override async Task<HttpResponseMessage> SendAsync(
            HttpRequestMessage request, CancellationToken cancellationToken)
        {
            HttpResponseMessage response = await base.SendAsync(request, cancellationToken);

            if (response.StatusCode == HttpStatusCode.NotFound)
            {
                request.Properties.Remove(HttpPropertyKeys.NoRouteMatched);
                var errorResponse = request.CreateResponse(response.StatusCode, "Content not found.");
                return errorResponse;
            }

            return response;
        }
    }
}