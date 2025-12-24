import 'dart:typed_data';
import 'package:polkadart/polkadart.dart';
import 'generated_flipper.dart';

Future<void> main(List<String> arguments) async {
  final address = Address.decode('5DXR2MxThkyZvG3s4ubu9yRdNiifchZ9eNV8i6ErGx6u1sea');
  final provider = Provider.fromUri(Uri.parse('ws://127.0.0.1:9944'));

  final contract = Contract(
    provider: provider,
    address: address.pubkey,
  );

  // Call the get method
  print('Get value: ${await contract.get()}');
}