// const leadanum = require('lead-delivery-common').lcsLeadEnum;

// Package.json
// "lead-delivery-common": "ssh://git@github.move.com:LeadPlatforms/lead-delivery-common.git#1.26.3"

// console.log(leadanum.MVIP_LEAD_SUB_TYPE.ASSIGNED_DEPRECATED);
// console.log(leadanum.MVIP_LEAD_SUB_TYPE.BONUS);
// console.log(leadanum.MVIP_LEAD_SUB_TYPE.BONUS_DEPRECATED);
// console.log(leadanum.MVIP_LEAD_SUB_TYPE.PROSPECT);
// console.log(leadanum.MVIP_LEAD_SUB_TYPE.PROSPECT_DEPRECATED);
// console.log(leadanum.MVIP_LEAD_SUB_TYPE.ASSIGNED);

const express = require('express');

const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
    res.send('Hello from Express app deployed with Argo Rollouts!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});