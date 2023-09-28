using System;
using Umbraco.Core;
using Umbraco.Core.Composing;

namespace YASMall_U8.App_Start
{
    public class ApplicationComposer : IUserComposer
    {
        public void Compose(Composition composition)
        {
            // ApplicationStarting event in V7: add IContentFinders, register custom services and more here
            System.Net.ServicePointManager.SecurityProtocol = System.Net.SecurityProtocolType.Tls12;
            //base.Compose(composition);
            composition.Components().Append<ApplicationComponent>();
        }
    }
}