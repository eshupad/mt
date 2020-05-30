/**
  * Manufacturer To Wholesaler
  * @param {org.example.mynetwork.M2W} tx - the Manufactrer to Wholesaler transaction
  * @transaction
  */ 


function M2W(tx) {
   return getParticipantRegistry('org.example.mynetwork.Wholesaler')
     .then(function(PRegistry) {
       return PRegistry.exists(tx.newOwner.getIdentifier())
     })
      .then(function(exists) {
       if(!exists) {
         throw Error('Invalid participant id')
       } else {
        return getAssetRegistry('org.example.mynetwork.Drug')
         .then(function (assetRegistry) {
          tx.drug.Latitude = tx.LatitudeWholesaler;
          tx.drug.Longitude = tx.LongitudeWholesaler;
          tx.drug.presentOwner = tx.newOwner;
          return assetRegistry.update(tx.drug);
      });
       }
     })
 } 

/**
  * Wholesaler to Distributor
  * @param {org.example.mynetwork.W2D} tx - the Wholesaler to Distributor transaction
  * @transaction
  */ 


function W2D(tx) {
   return getParticipantRegistry('org.example.mynetwork.Distributor')
     .then(function(PRegistry) {
       return PRegistry.exists(tx.newOwner.getIdentifier())
     })
      .then(function(exists) {
       if(!exists) {
         throw Error('Invalid participant id')
       } else {
        return getAssetRegistry('org.example.mynetwork.Drug')
         .then(function (assetRegistry) {
          tx.drug.Latitude = tx.LatitudeDistributor;
          tx.drug.Longitude = tx.LongitudeDistributor;
          tx.drug.presentOwner = tx.newOwner;
          return assetRegistry.update(tx.drug);
      });
       }
     })
 } 

/**
  * Distributor to Pharmacist
  * @param {org.example.mynetwork.D2P} tx - the Distributor to Pharmacist transaction
  * @transaction
  */ 


function D2P(tx) {
   return getParticipantRegistry('org.example.mynetwork.Pharmacist')
     .then(function(PRegistry) {
       return PRegistry.exists(tx.newOwner.getIdentifier())
     })
      .then(function(exists) {
       if(!exists) {
         throw Error('Invalid participant id')
       } else {
        return getAssetRegistry('org.example.mynetwork.Drug')
         .then(function (assetRegistry) {
          tx.drug.Latitude = tx.LatitudePharmacist;
          tx.drug.Longitude = tx.LongitudePharmacist;
          tx.drug.presentOwner = tx.newOwner;
          return assetRegistry.update(tx.drug);
      });
       }
     })
 } 

/**
  * Wholesaler to Manufacturer
  * @param {org.example.mynetwork.W2M} tx - the Wholesaler to Manufacturer transaction
  * @transaction
  */ 


function W2M(tx) {
   return getParticipantRegistry('org.example.mynetwork.Manufacturer')
     .then(function(PRegistry) {
       return PRegistry.exists(tx.newOwner.getIdentifier())
     })
      .then(function(exists) {
       if(!exists) {
         throw Error('Invalid participant id')
       } else {
        return getAssetRegistry('org.example.mynetwork.Drug')
         .then(function (assetRegistry) {
          tx.drug.Latitude = tx.LatitudeManufacturer;
          tx.drug.Longitude = tx.LongitudeManufacturer;
          tx.drug.presentOwner = tx.newOwner;
          return assetRegistry.update(tx.drug);
      });
       }
     })
 } 

/**
  * Distributor to Wholesaler
  * @param {org.example.mynetwork.D2W} tx - the Distributor to Wholesaler transaction
  * @transaction
  */ 


function D2W(tx) {
   return getParticipantRegistry('org.example.mynetwork.Wholesaler')
     .then(function(PRegistry) {
       return PRegistry.exists(tx.newOwner.getIdentifier())
     })
      .then(function(exists) {
       if(!exists) {
         throw Error('Invalid participant id')
       } else {
        return getAssetRegistry('org.example.mynetwork.Drug')
         .then(function (assetRegistry) {
          tx.drug.Latitude = tx.LatitudeWholesaler;
          tx.drug.Longitude = tx.LongitudeWholesaler;
          tx.drug.presentOwner = tx.newOwner;
          return assetRegistry.update(tx.drug);
      });
       }
     })
 } 

/**
  * Pharmacist to Distributor
  * @param {org.example.mynetwork.P2D} tx - the Pharmacist to Distributor transaction
  * @transaction
  */ 


function P2D(tx) {
   return getParticipantRegistry('org.example.mynetwork.Distributor')
     .then(function(PRegistry) {
       return PRegistry.exists(tx.newOwner.getIdentifier())
     })
      .then(function(exists) {
       if(!exists) {
         throw Error('Invalid participant id')
       } else {
        return getAssetRegistry('org.example.mynetwork.Drug')
         .then(function (assetRegistry) {
          tx.drug.Latitude = tx.LatitudeDistributor;
          tx.drug.Longitude = tx.LongitudeDistributor;
          tx.drug.presentOwner = tx.newOwner;
          return assetRegistry.update(tx.drug);
      });
       }
     })
 } 

 /**
 * Manufacturer can reject proposal made by Wholesaler
 * @param {org.example.mynetwork.MRejectProposal} rejectProposal
 * @transaction
 */
async function rejectProposal(rejectProposal) {
    
  let proposal = rejectProposal.proposal;
  proposal.status = "REJECTED";
  
  let proposalRegistry = await getAssetRegistry('org.example.mynetwork.MRejectProposal');
  await proposalRegistry.update(proposal);
}
/**
 * Wholesaler can reject proposal made by Distributor
 * @param {org.example.mynetwork.WRejectProposal} rejectProposal
 * @transaction
 */
async function rejectProposal(rejectProposal) {
    
  let proposal = rejectProposal.proposal;
  proposal.status = "REJECTED";
  
  let proposalRegistry = await getAssetRegistry('org.example.mynetwork.WRejectProposal');
  await proposalRegistry.update(proposal);
}
/**
 * Distributor can reject proposal made by Pharmacist
 * @param {org.example.mynetwork.DRejectProposal} rejectProposal
 * @transaction
 */
async function rejectProposal(rejectProposal) {
    
  let proposal = rejectProposal.proposal;
  proposal.status = "REJECTED";
  
  let proposalRegistry = await getAssetRegistry('org.example.mynetwork.DRejectProposal');
  await proposalRegistry.update(proposal);
}


 /**
 * Manufacturer can accept proposal made by Wholesaler
 * @param {org.example.mynetwork.MMakeDeal} acceptProposal
 * @transaction
 */
async function acceptProposal(acceptProposal) {
    
  let proposal = acceptProposal.proposal;
  proposal.status = "ACCEPTED";
  
  let proposalRegistry = await getAssetRegistry('org.example.mynetwork.MMakeDeal');
  await proposalRegistry.update(proposal);
}
 /**
 * Wholesaler can accept proposal made by Distributor
 * @param {org.example.mynetwork.WMakeDeal} acceptProposal
 * @transaction
 */
async function acceptProposal(acceptProposal) {
    
  let proposal = acceptProposal.proposal;
  proposal.status = "ACCCEPTED";
  
  let proposalRegistry = await getAssetRegistry('org.example.mynetwork.WMakeDeal');
  await proposalRegistry.update(proposal);
}
 /**
 * Distributor can accept proposal made by Pharmacist
 * @param {org.example.mynetwork.DMakeDeal} acceptProposal
 * @transaction
 */
async function acceptProposal(acceptProposal) {
    
  let proposal = acceptProposal.proposal;
  proposal.status = "ACCEPTED";
  
  let proposalRegistry = await getAssetRegistry('org.example.mynetwork.DMakeDeal');
  await proposalRegistry.update(proposal);
}