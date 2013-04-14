using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Optimization;

namespace WebStore.Web.App_Start
{
    public static class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/scripts/modernizr")
                .Include("~/scripts/modernizr-{version}.js"));


            bundles.Add(new ScriptBundle("~/scripts/vendor")
                .Include("~/scripts/jquery-{version}.js")
                .Include("~/scripts/jquery-ui-{version}.js")
                .Include("~/scripts/jquery.validate.js")
                .Include("~/scripts/bootstrap.js")
                .Include("~/scripts/knockout-{version}.js")
                .Include("~/scripts/sammy-{version}.js")
                .Include("~/scripts/moment.js")
                //.Include("~/scripts/Q.js")
                //.Include("~/scripts/breeze.debug.js")
                .Include("~/scripts/toastr.js"));

            bundles.Add(
             new StyleBundle("~/Content/css")
                .Include("~/Content/ie10mobile.css")
                .Include("~/Content/bootstrap.css")
                .Include("~/Content/bootstrap-responsive.css")
                .Include("~/Content/font-awesome.css")
                .Include("~/Content/durandal.css")
                .Include("~/Content/toastr.css")
                .Include("~/Content/styles.css"));
        }
    }
}