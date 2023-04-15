import { MintNFT } from './MintNFT.js';
import {
  isReady,
  shutdown,
  Field,
  Mina,
  PrivateKey,
  AccountUpdate,
  Encoding,
} from 'snarkyjs';

await isReady;

console.log('SnarkyJS loaded');

const useProof = false;

const Local = Mina.LocalBlockchain({ proofsEnabled: useProof });
Mina.setActiveInstance(Local);
const { privateKey: deployerKey, publicKey: deployerAccount } =
  Local.testAccounts[0];
const { privateKey: senderKey, publicKey: senderAccount } =
  Local.testAccounts[1];

const deployerAcc = Local.testAccounts[0].privateKey;
const Bob = Local.testAccounts[1].privateKey;
const SuperBob = Local.testAccounts[2].privateKey;
const MegaBob = Local.testAccounts[3].privateKey;
const Jack = Local.testAccounts[4].privateKey;
let users = [Bob, SuperBob, MegaBob, Jack];

const zkAppPrivateKey = PrivateKey.random();
const zkAppAddress = zkAppPrivateKey.toPublicKey();

const zkAppInstance = new MintNFT(zkAppAddress);
const deployTxn = await Mina.transaction(deployerAccount, () => {
  AccountUpdate.fundNewAccount(deployerAccount);
  zkAppInstance.deploy();
});
await deployTxn.sign([deployerKey, zkAppPrivateKey]).send();
console.log(
  'the message on chain is:',
  zkAppInstance.message1.get().toString()
);

try {
  const tx1 = await Mina.transaction(senderAccount, () => {
    zkAppInstance.myinit();
  });
  await tx1.prove();
  await tx1.sign([senderKey]).send();
} catch (e) {
  console.log(e);
}

const secret1 = Encoding.stringToFields('secret')[0];

try {
  const tx1 = await Mina.transaction(senderAccount, () => {
    zkAppInstance.setSecret(
      Field(secret1),
      Field(secret1),
      Field(secret1),
      Field(secret1),
      Field(secret1)
    );
  });
  await tx1.prove();
  await tx1.sign([senderKey]).send();
} catch (e) {
  console.log(e);
}

try {
  const tx1 = await Mina.transaction(senderAccount, () => {
    zkAppInstance.publishMessage(
      Field(Encoding.stringToFields('Hello Mina!!')[0]),
      Field(secret1),
      Field(secret1),
      Field(secret1),
      Field(secret1),
      Field(secret1)
    );
  });
  await tx1.prove();
  await tx1.sign([senderKey]).send();
  const field2 = zkAppInstance.message1.get();
  console.log('the message on chain is:', Encoding.stringFromFields([field2]));
} catch (e) {
  console.log(e);
}

try {
  const tx1 = await Mina.transaction(senderAccount, () => {
    zkAppInstance.publishMessage(
      Field(Encoding.stringToFields('2nd message here is!')[0]),
      Field(secret1),
      Field(secret1),
      Field(secret1),
      Field(secret1),
      Field(secret1)
    );
  });
  await tx1.prove();
  await tx1.sign([senderKey]).send();
  const field2 = zkAppInstance.message2.get();
  console.log(
    'the 2nd message on chain is:',
    Encoding.stringFromFields([field2])
  );
} catch (e) {
  console.log(e);
}

// try {
//   const tx1 = await Mina.transaction(senderAccount, () => {
//     zkAppInstance.publishMessage(
//       Field(Encoding.stringToFields('Hello Mina!!')[0]),
//       Field(777),
//     );
//   });
//   await tx1.prove();
//   await tx1.sign([senderKey]).send();
//   const field2 = zkAppInstance.message.get();
//   const txt = zkAppInstance.message.get().toString();
//   console.log('the message on chain is:', Encoding.stringFromFields([field2]));
// } catch (e) {
//   console.log("___________expected_err____________")
//   console.log(e);
// }

//
//
// console.log('Shutting down');
//
await shutdown();
