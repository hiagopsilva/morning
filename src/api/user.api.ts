// import { handleResponseError } from "~/utils";
import { request } from "~/services";

class UserAPI {
  static fetchUser = async ({ id }: any): Promise<any> => {
    const { data } = await request.get(`/user/${id}`);
    return data;
  };

  static logout = async (): Promise<void> => {
    await request.post("/user/logout");
  };
}
export default UserAPI;
