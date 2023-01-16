#Campaign-Dapp
This Dapp is based on a project made by Stephen Grider on the Ethereum and Solidity: The Complete Developer's Guide course. I learned a lot about the project, but there were still some things that I wanted to change. So I will list them:

##Title and Description
I wanted it to be more user-friendly, so I added a title and a description for the project. This way, it would be easier to find the campaign and identify it without needing to always click.

##Finalize Request Improvement
On the request page, all users could see the "Finalize Request" button. If they clicked the button, it would not work for them. However, I didn't like that they could see it. So I made an improvement and now only the owner can see the button.

##More than one contribution bug
With the same Metamask account, the user could contribute more than once in the same campaign. This bug could cause some trouble if a malicious user wanted to sabotage someone's campaign. I fixed it and now you can only contribute once for each campaign.
