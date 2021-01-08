(window.webpackJsonp=window.webpackJsonp||[]).push([[223],{1238:function(t,e,n){"use strict";n.r(e);var o=n(25),r=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"twist"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#twist"}},[t._v("#")]),t._v(" Twist")]),t._v(" "),o("p",[t._v("You can use these credentials to authenticate the following nodes with Twist.")]),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/nodes/nodes-library/nodes/Twist/"}},[t._v("Twist")])],1)]),t._v(" "),o("h2",{attrs:{id:"prerequisites"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[t._v("#")]),t._v(" Prerequisites")]),t._v(" "),o("p",[t._v("Create a "),o("a",{attrs:{href:"https://twist.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Twist"),o("OutboundLink")],1),t._v(" account.")]),t._v(" "),o("h2",{attrs:{id:"using-oauth"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#using-oauth"}},[t._v("#")]),t._v(" Using OAuth")]),t._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[t._v("⚠️ Callback URL with Twist")]),t._v(" "),o("p",[o("strong",[t._v("Note:")]),t._v(" The Redirect URL should be a URL in your domain. For example, "),o("code",[t._v("https://mytemplatemaker.example.com/gr_callback")]),t._v(". Twist doesn't accept the localhost callback URL. Refer to the "),o("a",{attrs:{href:"#how-to-configure-the-oauth-credentials-for-the-local-environment"}},[t._v("FAQs")]),t._v(" to learn to configure the credentials for the local environment.")])]),t._v(" "),o("ol",[o("li",[t._v("Access your "),o("a",{attrs:{href:"https://twist.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("Twist"),o("OutboundLink")],1),t._v(" workspace.")]),t._v(" "),o("li",[t._v("Click on your avatar in the top right corner.")]),t._v(" "),o("li",[t._v("Select 'Add integrations...' from the dropdown list.")]),t._v(" "),o("li",[t._v("Click on "),o("em",[o("strong",[t._v("Build")])]),t._v(" on the top.")]),t._v(" "),o("li",[t._v("Click on the "),o("em",[o("strong",[t._v("Add a new integration")])]),t._v(" button.")]),t._v(" "),o("li",[t._v("Enter a name in the "),o("em",[o("strong",[t._v("Integration name")])]),t._v(" field.")]),t._v(" "),o("li",[t._v("Enter a description in the "),o("em",[o("strong",[t._v("Description")])]),t._v(" field.")]),t._v(" "),o("li",[t._v("Select 'General integration' from the "),o("em",[o("strong",[t._v("Integration type")])]),t._v(" dropdown list.")]),t._v(" "),o("li",[t._v("Click on the "),o("em",[o("strong",[t._v("Create my integration")])]),t._v(" button.")]),t._v(" "),o("li",[t._v("Click on "),o("em",[o("strong",[t._v("OAuth Authentication")])]),t._v(" from the left sidebar.")]),t._v(" "),o("li",[t._v("Copy the 'OAuth Callback URL' provided in the Twist OAuth2 API credentials in n8n and paste it in the "),o("em",[o("strong",[t._v("OAuth 2 redirect URL")])]),t._v(" field on your Twist integration page.")]),t._v(" "),o("li",[t._v("Click on the "),o("em",[o("strong",[t._v("Update integration")])]),t._v(" button.")]),t._v(" "),o("li",[t._v("Use the "),o("em",[o("strong",[t._v("Client ID")])]),t._v(" and "),o("em",[o("strong",[t._v("Client Secret")])]),t._v(" with your Twist node credentials in n8n.")]),t._v(" "),o("li",[t._v("Click on the circle button in the OAuth section to connect a Twist account to n8n.")]),t._v(" "),o("li",[t._v("Click the "),o("em",[o("strong",[t._v("Save")])]),t._v(" button to save your credentials in n8n.")])]),t._v(" "),o("p",[o("img",{attrs:{src:n(518),alt:"Getting Twist credentials"}})]),t._v(" "),o("h2",{attrs:{id:"faqs"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#faqs"}},[t._v("#")]),t._v(" FAQs")]),t._v(" "),o("h3",{attrs:{id:"how-to-configure-the-oauth-credentials-for-the-local-environment"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#how-to-configure-the-oauth-credentials-for-the-local-environment"}},[t._v("#")]),t._v(" How to configure the OAuth credentials for the local environment?")]),t._v(" "),o("p",[t._v("Twist doesn't accept the localhost callback  URL. However, you can follow the steps mentioned below to configure the OAuth credentials for the local environment:")]),t._v(" "),o("ol",[o("li",[t._v("We will use "),o("a",{attrs:{href:"https://ngrok.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("ngrok"),o("OutboundLink")],1),t._v(" to expose the local server running on port "),o("code",[t._v("5678")]),t._v(" to the internet. In your terminal, run the following command:")])]),t._v(" "),o("div",{staticClass:"language-sh extra-class"},[o("pre",{pre:!0,attrs:{class:"language-sh"}},[o("code",[t._v("ngrok http "),o("span",{pre:!0,attrs:{class:"token number"}},[t._v("5678")]),t._v("\n")])])]),o("ol",{attrs:{start:"2"}},[o("li",[t._v("Run the following command in a new terminal. Replace "),o("code",[t._v("<YOUR-NGROK-URL>")]),t._v(" with the URL that you get from the previous step.")])]),t._v(" "),o("div",{staticClass:"language-sh extra-class"},[o("pre",{pre:!0,attrs:{class:"language-sh"}},[o("code",[o("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("WEBHOOK_TUNNEL_URL")]),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("YOUR-NGROK-URL"),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),o("ol",{attrs:{start:"3"}},[o("li",[t._v("Start your n8n instance.")]),t._v(" "),o("li",[t._v("Follow the instructions mentioned in the "),o("a",{attrs:{href:"#using-oauth"}},[t._v("Using OAuth")]),t._v(" section to configure your credentials.")])])])}),[],!1,null,null,null);e.default=r.exports},518:function(t,e,n){t.exports=n.p+"assets/img/using-oauth.e826dc92.gif"}}]);