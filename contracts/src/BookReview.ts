import {
  Field,
  SmartContract,
  state,
  State,
  method,
  PrivateKey,
  PublicKey,
  Poseidon,
} from 'snarkyjs';

export class MintNFT extends SmartContract {
  // On-chain state definitions
  @state(Field) message1 = State<Field>();
  @state(Field) message2 = State<Field>();
  @state(Field) message3 = State<Field>();
  @state(Field) message4 = State<Field>();
  @state(Field) message5 = State<Field>();
  @state(Field) message6 = State<Field>();
  @state(Field) x = State<Field>();
  @state(Field) cnt = State<Field>();

  @method myinit() {
    this.message1.set(Field(0));
    this.message2.set(Field(0));
    this.message3.set(Field(0));
    this.message4.set(Field(0));
    this.cnt.set(Field(0));
  }

  @method setSecret(
    secret1: Field,
    secret2: Field,
    secret3: Field,
    secret4: Field,
    secret5: Field
  ) {
    this.x.set(Poseidon.hash([secret1, secret2, secret3, secret4, secret5]));
  }

  @method publishMessage(
    message: Field,
    secret1: Field,
    secret2: Field,
    secret3: Field,
    secret4: Field,
    secret5: Field
  ) {
    const x = this.x.get();
    this.x.assertEquals(x);

    Poseidon.hash([secret1, secret2, secret3, secret4, secret5]).assertEquals(
      x
    );

    const cnt = this.cnt.get();
    this.cnt.assertEquals(cnt);
    this.cnt.set(cnt.add(1));

    if (cnt.equals(1)) {
      this.message1.set(message);
    }
    if (cnt.equals(2)) {
      this.message2.set(message);
    }
    if (cnt.equals(2)) {
      this.message3.set(message);
    }
    if (cnt.equals(4)) {
      this.message4.set(message);
    }
    if (cnt.equals(5)) {
      this.message5.set(message);
    }
    if (cnt.equals(6)) {
      this.message6.set(message);
    }
  }
}
