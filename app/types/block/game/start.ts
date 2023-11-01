import { ArgType, BLOCK_CATEGORY, BLOCK_TYPE, BlockDefaultType } from "..";

export class GameStartBlockType extends BlockDefaultType {
  type = BLOCK_TYPE.GAMESTART;
  category = BLOCK_CATEGORY.CONDITION;
  name = "게임이 시작하면";
  icon = "";
  description = "게임 시작 시 한 번 실행됩니다.";
  args: { [key: string]: ArgType } = {};
  acceptInnerCategory = [BLOCK_CATEGORY.ACTION, BLOCK_CATEGORY.CONDITION];
  inner: string[] = [];
}
