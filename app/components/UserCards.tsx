"use client";

import { Fragment } from "react";
import { openDialog } from "../redux/features/dialogSlice";
import { setCurrentUser } from "../redux/features/usersSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  UserNameText,
  TextBlack,
  TextGrey,
  SkeletonStyled,
  BoxStyled,
} from "./styles/UserCards.styles";
import useUsers from "../hooks/useUsers";
import useMediaQuery from "@mui/material/useMediaQuery";
import dayjs from "dayjs";
interface userProps {
  dob: {
    date: string;
    age: number;
  };
  email: string;
  gender: string;
  location: {
    country: string;
  };
  name: {
    first: string;
    last: string;
  };
}

export default function UserCards() {
  const page = useAppSelector((state) => state.paginationReducer.page);
  const dispatch = useAppDispatch();
  const matches = useMediaQuery("(min-width: 900px)");
  const { users, isLoading, isValidating } = useUsers(page, 7);

  function handleOpen(user: unknown) {
    dispatch(openDialog());
    dispatch(setCurrentUser(user));
  }

  return (
    <section>
      {isLoading || isValidating ? (
        <Fragment>
          <SkeletonStyled variant="rectangular" width={"100%"} height={80} />
          <SkeletonStyled variant="rectangular" width={"100%"} height={80} />
          <SkeletonStyled variant="rectangular" width={"100%"} height={80} />
        </Fragment>
      ) : (
        users?.map((user: userProps, index: number) => (
          <BoxStyled key={index} onClick={() => handleOpen(user)}>
            <TextGrey>{dayjs(user?.dob?.date).format("DD MMM YYYY")}</TextGrey>
            <UserNameText className="user-name-text">
              {user?.name?.first} {user?.name?.last}
            </UserNameText>
            <TextGrey>{user?.gender}</TextGrey>
            <TextBlack>{user?.location?.country}</TextBlack>
            {matches ? <TextGrey>{user?.email}</TextGrey> : null}
          </BoxStyled>
        ))
      )}
    </section>
  );
}
