# angularapplication demo
 angularapplication demo

This is primarily an angular material app designed to showcase code quality, integrity of the angularcommon library. 
A login component along with routing logic both internal to the app and when routing back from external links uses backend calls to a webapi utilizing the DotNETCommon library also provided as a repo. 
Registration also is available using the same webapi to add new users rooted in a state object and service both of which are to be inherited to maintain dependency injection benefits angular 18 provides. 
Custom and publicly available (btoa, aotb) encryption are used to safely encrypt session information with the option to compound encryption methods to further secure user data (always formatted to a pattern "num, num num..." string ). 
Session handling allows for safe return to app from external routing as required and destruction of said data on logout. A timeout function is also being implemented.
