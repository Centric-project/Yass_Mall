using System;
using System.Text;
using System.Web;
using System.Web.Caching;
using System.Web.Configuration;
using System.Web.Http;
using System.Web.Http.Results;
using Newtonsoft.Json;
using Umbraco.Web.WebApi;
//using GoogleApi;
//using GoogleApi.Entities.Places.Details.Request;
using System.Threading.Tasks;
using System.Globalization;
using System.Linq;
using System.Dynamic;

namespace YASMall_U8.Controllers
{
    public class CustomController : UmbracoApiController
    {
        //[HttpGet]
        //public async Task<JsonResult<dynamic>> GetToday(string lang)
        //{
        //    try
        //    {
        //        // determine request lang
        //        //var requestLang = ("" + lang).ToLower() == "ar" ?
        //        //    GoogleApi.Entities.Common.Enums.Language.Arabic : GoogleApi.Entities.Common.Enums.Language.English;
        //        //var cacheKey = "OpenHoursToday_" + requestLang.ToString();

        //        //if (HttpContext.Current.Cache[cacheKey] == null)
        //        //{
        //        //    var today = TimeZoneInfo.ConvertTimeBySystemTimeZoneId(DateTime.Now, "Arabian Standard Time");
        //        //    var cultureInfo = new CultureInfo(lang == "ar" ? "ar" : "en-US");

        //        //    var response = await GooglePlaces.Details.QueryAsync(new PlacesDetailsRequest
        //        //    {
        //        //        PlaceId = WebConfigurationManager.AppSettings["GooglePlacesYasMallPlaceId"],
        //        //        Key = WebConfigurationManager.AppSettings["GooglePlacesApiKey"],
        //        //        Language = requestLang
        //        //    });

        //        //    var todayPeriod = response.Result.OpeningHours.Periods.ElementAt((int)today.DayOfWeek);
        //        //    dynamic openHoursToday = new ExpandoObject();
        //        //    openHoursToday.IsOpenNow = response.Result.OpeningHours.OpenNow;
        //        //    openHoursToday.Open = todayPeriod.Open.Time; //GetFriendlyTime(todayPeriod.Open.Time, cultureInfo);
        //        //    openHoursToday.Close = todayPeriod.Close.Time; //GetFriendlyTime(todayPeriod.Close.Time, cultureInfo);
        //        //    openHoursToday.Date = today.Date;

        //        //    HttpContext.Current.Cache.Add(cacheKey, openHoursToday, null, today.Date.AddDays(1), Cache.NoSlidingExpiration, CacheItemPriority.AboveNormal, null);
        //        //}

        //        // return result
        //        //return new JsonResult<dynamic>(HttpContext.Current.Cache[cacheKey] as dynamic, new JsonSerializerSettings(), Encoding.UTF8, Request);
        //        return new JsonResult<dynamic>("API is not responding, please contact your administrator" as dynamic, new JsonSerializerSettings(), Encoding.UTF8, Request);

        //    }
        //    catch (Exception ex)
        //    {
        //        //API is not responding, please contact your administrator
        //        return new JsonResult<dynamic>(ex.Message as dynamic, new JsonSerializerSettings(), Encoding.UTF8, Request);

        //    }
        //}

        //private string GetFriendlyTime(string rawTime, CultureInfo cultureInfo)
        //{
        //    if (string.IsNullOrWhiteSpace(rawTime) || rawTime.Length != 4)
        //        return null;

        //    var hours = rawTime.Substring(0, 2);
        //    var minutes = rawTime.Substring(2);
        //    string ampm = null;

        //    int hoursInt;
        //    if (int.TryParse(hours, out hoursInt))
        //    {
        //        ampm = (hoursInt >= 12) ? GetDictionaryValue("PM", cultureInfo, UmbracoContext) : GetDictionaryValue("AM", cultureInfo, UmbracoContext);
        //        if (hoursInt == 0)
        //            hours = "12";
        //    }

        //    return hours + ":" + minutes + ampm;
        //}

        [HttpGet]
        public JsonResult<dynamic> GETCookie(string cookieName)
        {
            try
            {
                dynamic resp = null;
                HttpCookie objCookie = HttpContext.Current.Request.Cookies.Get(cookieName);
                if (objCookie != null)
                {
                    resp = new { RespCode = 1, RespMessage = "Cookie found with the matching name" };
                }
                else
                {
                    resp = new { RespCode = 0, RespMessage = "Cookie not found " + cookieName };
                }

                return new JsonResult<dynamic>(resp, new JsonSerializerSettings(), Encoding.UTF8, Request);
            }
            catch (Exception ex)
            {
                dynamic resp = new { RespCode = 0, RespMessage = ex.Message };
                return new JsonResult<dynamic>(resp, new JsonSerializerSettings(), Encoding.UTF8, Request);
            }
        }

        public class Cookie
        {
            public string cookieName { get; set; }
            public string cookieValue { get; set; }
            public int expiryDays { get; set; }
        }
        [HttpPost]
        public JsonResult<dynamic> POSTCreateCookie(Cookie objC)
        {
            try
            {
                HttpCookie cookie = new HttpCookie(objC.cookieName);
                cookie.Value = objC.cookieValue;
                cookie.Expires = DateTime.Now.AddDays(objC.expiryDays);
                HttpContext.Current.Response.Cookies.Add(cookie);

                dynamic resp = new { RespCode = 1, RespMessage = "Cookie successfully created " + objC.cookieName };
                return new JsonResult<dynamic>(resp, new JsonSerializerSettings(), Encoding.UTF8, Request);
            }
            catch (Exception ex)
            {
                dynamic resp = new { RespCode = 0, RespMessage = ex.Message };
                return new JsonResult<dynamic>(resp, new JsonSerializerSettings(), Encoding.UTF8, Request);
            }
        }
    }
}