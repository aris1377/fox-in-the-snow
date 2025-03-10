import Errors from "../libs/Error";
import { View, ViewInput } from "../libs/types/view";
import { Message } from "../libs/Error";
import { HttpCode } from "../libs/Error";
import ViewModel from "../schema/View.model";

class ViewService {
  private readonly viewModel;

  constructor() {
    this.viewModel = ViewModel;
  }

  public async checkViewExistence(input: ViewInput): Promise<View | any> {
    return await this.viewModel
      .findOne({ memberId: input.memberId, viewRefId: input.viewRefId })
      .exec();
    }
     public async insertMemberView(input: ViewInput): Promise<View | any> {
        try {
          return await this.viewModel.create(input);
        } catch (err) {
          console.log("ERROR, model:insertMemberView:", err);
          throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
        }
      }

}

export default ViewService;
