use solana_program::{
    account_info::AccountInfo,
    entrypoint::ProgramResult,
    pubkey::Pubkey,
    entrypoint,
    msg
};

entrypoint!(proccess_intruction);

fn proccess_intruction(
    // required
    program_id: &Pubkey, 
    accounts: &[AccountInfo],
    instruction_data: &[u8]
) -> ProgramResult{
    msg!("Hello World");
    Ok(())
}
